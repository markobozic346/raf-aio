import { memo } from "react";
import { useTable, usePagination } from "react-table";
import {
  Table,
  Thead,
  Tbody,
  Flex,
  IconButton,
  Text,
  Tooltip,
  useMediaQuery,
  Th,
  Tr,
  TextProps,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import TableRow from "./TableRow";

interface Props {
  columns: any[];
  data: any[];
}

function MyTable({ columns, data }: Props) {
  const [isSmallScreen] = useMediaQuery("(max-width: 700px)");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {!isSmallScreen &&
            headerGroups.map((headerGroup, i) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, id) => {
            prepareRow(row);
            return (
              <TableRow
                key={`table-row-${id}`}
                row={row}
                headerGroups={headerGroups}
                isSmallScreen={isSmallScreen}
              />
            );
          })}
        </Tbody>
      </Table>

      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              aria-label="first"
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="previous"
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink={0} mr={8}>
            Page
            <Text {...textProps}>{pageIndex + 1}</Text>
            of
            <Text {...textProps}>{pageOptions.length}</Text>
          </Text>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              aria-label="next"
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              aria-label="last"
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </>
  );
}

const textProps = { fontWeight: "bold", as: "span", mx: "1" } as TextProps;

export default memo(MyTable);
