// hooks/useMqtt.ts
import { useState, useEffect, useRef } from "react";
import mqtt, { MqttClient } from "mqtt";

interface UseMqttProps {
  topic: string;
  onMessage: (message: string) => void;
}

const useMqtt = ({ topic, onMessage }: UseMqttProps) => {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const clientRef = useRef<MqttClient | null>(null);

  const brokerUrl = process.env.NEXT_PUBLIC_MQTT_BROKER_URL || "";
  const username = process.env.NEXT_PUBLIC_MQTT_USERNAME;
  const password = process.env.NEXT_PUBLIC_MQTT_PASSWORD;

  useEffect(() => {
    const connectUrl = `ws://${brokerUrl}`;
    const options = {
      username,
      password,
      reconnectPeriod: 1000,
    };

    const mqttClient = mqtt.connect(connectUrl, options);

    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
      setIsConnected(true);
      mqttClient.subscribe(topic, (err) => {
        if (err) {
          console.error("MQTT subscription error:", err);
        } else {
          console.log(`Subscribed to topic: ${topic}`);
        }
      });
    });

    mqttClient.on("reconnect", () => {
      console.log("Reconnecting to MQTT broker...");
    });

    mqttClient.on("error", (err) => {
      console.error("MQTT connection error:", err);
      mqttClient.end();
    });

    mqttClient.on("message", (receivedTopic, message) => {
      if (receivedTopic === topic) {
        onMessage(message.toString());
      }
    });

    mqttClient.on("close", () => {
      console.log("Disconnected from MQTT broker");
      setIsConnected(false);
    });

    clientRef.current = mqttClient;
    setClient(mqttClient);

    return () => {
      mqttClient.end();
    };
  }, [brokerUrl, username, password, topic, onMessage]);

  return { client, isConnected };
};

export default useMqtt;
