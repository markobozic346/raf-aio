import { Thead, Tr, Th, Tbody, Td, Tfoot, Table } from "@chakra-ui/react";

interface Props {
  tData: any;
}

const MyTable = ({ tData }: Props) => {
  console.log(tData);
  const { headings, scheduleData } = tData;
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          {headings.map((name: string) => (
            <Th key={name}>{name}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {scheduleData.map((data: any, index: number) => (
          <Tr key={`row${index}`}>
            <Td>{data.subject}</Td>
            <Td>{data.year}</Td>
            <Td>{data.group}</Td>
            <Td>{data.zoomUrl}</Td>
            <Td>{data.eLearningUrl}</Td>
            <Td>{data.info}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default MyTable;
