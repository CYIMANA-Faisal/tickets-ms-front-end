'use client'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../libs/store' // Adjust the import path
import { useGetTicketsQuery } from '../../libs/features/api/endpoints/tickets.endpoints'
import Ticket from './ticket.component'
import { ITicket } from '../../libs/types'
import useMqtt from '../hooks/useMqtt'
import {
  addTicket,
  removeTicket,
} from '../../libs/features/tickets/ticketsSlice' // Adjust the import path
import handle from 'mqtt/lib/handlers/index'
import { Button, Table } from 'antd'
import type { TableColumnsType } from 'antd'

const dummyData: ITicket[] = [
  {
    id: 1,
    referenceID: 'REF12345',
    subject: 'Issue with meter',
    meterNumber: '123456789',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    description: '',
    customerID: 0,
    uploads: [],
    supportStaffID: 0,
    internalStaffID: null,
    status: '',
  },
  {
    id: 2,
    referenceID: 'REF67890',
    subject: 'Billing error',
    meterNumber: '987654321',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    description: '',
    customerID: 0,
    uploads: [],
    supportStaffID: 0,
    internalStaffID: null,
    status: '',
  },
  {
    id: 3,
    referenceID: 'REF11121',
    subject: 'Service request',
    meterNumber: '123123123',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    description: '',
    customerID: 0,
    uploads: [],
    supportStaffID: 0,
    internalStaffID: null,
    status: '',
  },
  {
    id: 4,
    referenceID: 'REF12345',
    subject: 'Issue with meter',
    meterNumber: '123456789',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    description: '',
    customerID: 0,
    uploads: [],
    supportStaffID: 0,
    internalStaffID: null,
    status: '',
  },
  {
    id: 5,
    referenceID: 'REF67890',
    subject: 'Billing error',
    meterNumber: '987654321',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    description: '',
    customerID: 0,
    uploads: [],
    supportStaffID: 0,
    internalStaffID: null,
    status: '',
  },
  {
    id: 6,
    referenceID: 'REF11121',
    subject: 'Service request',
    meterNumber: '123123123',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    description: '',
    customerID: 0,
    uploads: [],
    supportStaffID: 0,
    internalStaffID: null,
    status: '',
  },
]

const columns: TableColumnsType<ITicket> = [
  {
    title: 'Reference ID',
    dataIndex: 'referenceID',
    key: 'referenceID',
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Meter Number',
    dataIndex: 'meterNumber',
    key: 'meterNumber',
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => {
      const handleAttend = () => {
        console.log(`Attending ticket ${record.id}`)
      }

      return (
        <div className="text-right">
          <Button
            className="!text-primary !border !border-primary !rounded-full"
            onClick={handleAttend}
            style={{ float: 'right' }}
          >
            Attend
          </Button>
        </div>
      )
    },
  },
]

const Tickets: React.FC = () => {
  const dispatch = useDispatch()
  const tickets = useSelector((state: RootState) => state.tickets.tickets)
  const { data, error, isLoading } = useGetTicketsQuery({})
  // const data = { items: dummyData }

  useEffect(() => {
    if (data) {
      data.items.forEach((ticket: ITicket) => {
        dispatch(addTicket(ticket))
      })
    }
  }, [data, dispatch])

  const handleNewTicket = useCallback(
    (message: string) => {
      console.log('New ticket message:', message)
      try {
        const newTicket: ITicket = JSON.parse(message) // Adjust based on the message format
        dispatch(addTicket(newTicket))
      } catch (error) {
        console.error('Failed to parse new ticket message', error)
      }
    },
    [dispatch]
  )

  const handleAttendedTicket = useCallback(
    (message: string) => {
      console.log('Attended ticket message:', message)
      try {
        const attendedTicket: ITicket = JSON.parse(message) // Adjust based on the message format
        dispatch(removeTicket(attendedTicket.id))
      } catch (error) {
        console.error('Failed to parse attended ticket message', error)
      }
    },
    [dispatch]
  )

  useMqtt({
    topic: 'ticket-ms/chanels/new-tickets',
    onMessage: handleNewTicket,
  })

  useMqtt({
    topic: 'ticket-ms/chanels/attend-tickets',
    onMessage: handleAttendedTicket,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading tickets: {error.toString()}</div>
  }

  return (
    <div className="h-[80%] w-full overflow-hidden mt-5">
      <Table
        className="overflow-hidden"
        columns={columns}
        dataSource={tickets}
        pagination={{ pageSize: 4 }}
        scroll={{ y: 'calc(100vh - 250px)' }}
      />

      {/* <Ticket
          key={Math.random()}
          id={Math.random()}
          referenceID="REFERENCE ID"
          subject="SUBJECT"
          meterNumber="METER NUMBER"
          isHeader={true}
        />
      {data.items.map((ticket: ITicket) => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          referenceID={ticket.referenceID}
          subject={ticket.subject}
          meterNumber={ticket.meterNumber}
          isHeader={false}
        />
      ))} */}
    </div>
  )
}

export default Tickets
