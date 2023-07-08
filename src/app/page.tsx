'use client'

import { Table } from "@/components/table";
import { TableTBody } from "@/components/table/tbody";
import { TableTd } from "@/components/table/td";
import { TableTh } from "@/components/table/th";
import { TableTHead } from "@/components/table/thead";
import { TableTr } from "@/components/table/tr";

const TableHeadData = [
  'Name',
  'Email',
  'Salary',
  'Birth Date',
  'Status',
  'Actions'
];

const TableBodyData = [
  {
    name: 'John Doe',
    email: 'email@gmail.com',
    salary: '$2000',
    birthDate: '2022-01-01',
    status: 'active',
    actions: 'actions'
  },
  {
    name: 'John Doe',
    email: 'email@gmail.com',
    salary: '$2000',
    birthDate: '2022-01-01',
    status: 'active',
    actions: 'actions'
  }
]

export default function Home() {
  return (
    <main className='container mx-auto my-0'>
      <Table>
        <TableTHead>
          <TableTr isTableHead>
            {TableHeadData.map((item, index) => (
              <TableTh key={index}>
                {item}
              </TableTh>
            ))}
          </TableTr>
        </TableTHead>
        <TableTBody>
          {TableBodyData.map((item, index) => (
            <TableTr key={index} isRowEven={(index + 1) % 2 === 0}>
              <TableTd>
                {item.name}
              </TableTd>
              <TableTd>{item.email}</TableTd>
              <TableTd>{item.salary}</TableTd>
              <TableTd>{item.birthDate}</TableTd>
              <TableTd>{item.status}</TableTd>
              <TableTd>{item.actions}</TableTd>
            </TableTr>
          ))}
        </TableTBody>
      </Table>
    </main>
  )
}
