import type { Meta, StoryObj } from '@storybook/react-vite';

import Table from './Table';
import { mockData } from '../../data';

const meta = {
  title: 'Originals/LeagueTracker/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const headerRow: string[] = ["Team", "Points"];
    const standings = mockData.standings[0].table;
    
    return (
      <Table>
        <Table.Header>
          <tr>
            {headerRow.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </Table.Header>
        <Table.Body>
          {
            standings.map((team, index) => (
              <Table.Row key={index}>
                <td>{team.team.name}</td>
                <td>{team.points}</td>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    )
  }
};
