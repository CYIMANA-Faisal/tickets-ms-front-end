// src/lib/mqttClient.ts
import mqtt, { MqttClient } from "mqtt";

const MQTT_BROKER_URL = process.env.NEXT_PUBLIC_MQTT_BROKER_URL as string;
const MQTT_USERNAME = process.env.NEXT_PUBLIC_MQTT_USERNAME;
const MQTT_PASSWORD = process.env.NEXT_PUBLIC_MQTT_PASSWORD;

let client: MqttClient | null = null;

export function connectMqtt(): MqttClient {
  if (!client) {
    client = mqtt.connect(MQTT_BROKER_URL, {
      username: MQTT_USERNAME,
      password: MQTT_PASSWORD,
    });

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
    });

    client.on("error", (err) => {
      console.error("MQTT connection error:", err);
      client?.end();
    });

    client.on("reconnect", () => {
      console.log("Reconnecting to MQTT broker");
    });

    client.on("message", (topic, message) => {
      console.log("Received message:", topic, message.toString());
    });
  }

  return client;
}

export function publish(topic: string, message: string): void {
  if (client) {
    client.publish(topic, message);
  } else {
    console.error("MQTT client not connected");
  }
}

export function subscribe(
  topic: string,
  callback: (message: string) => void
): void {
  if (client) {
    client.subscribe(topic, (err) => {
      if (!err) {
        client?.on("message", (msgTopic, message) => {
          if (msgTopic === topic) {
            callback(message.toString());
          }
        });
      } else {
        console.error("MQTT subscription error:", err);
      }
    });
  } else {
    console.error("MQTT client not connected");
  }
}

export function unsubscribe(topic: string): void {
  if (client) {
    client.unsubscribe(topic, (err) => {
      if (err) {
        console.error("MQTT unsubscribe error:", err);
      }
    });
  } else {
    console.error("MQTT client not connected");
  }
}

export function disconnect(): void {
  if (client) {
    client.end(() => {
      console.log("Disconnected from MQTT broker");
    });
  }
}
