import { Tr, Td, Box } from "@chakra-ui/react";
import { memo } from "react";
import { HeaderGroup, Row } from "react-table";

const rowMobileProps = {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid black",
} as any;

const cellMobileProps = {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "space-between",
} as any;

interface Props {
    row: Row<object>
    headerGroups: HeaderGroup<object>[]
    isSmallScreen: boolean
}
const TableRow = ({ row, headerGroups, isSmallScreen = false }: Props) => {

    const rowProps = isSmallScreen ? rowMobileProps : {}
    const cellProps = isSmallScreen ? cellMobileProps : {}
  return (
    <Tr {...row.getRowProps()} {...rowProps}>
      {row.cells.map((cell, i) => {
        return (
          <Td  {...cell.getCellProps()} {...cellProps}>
                { isSmallScreen && <Box>{headerGroups[0]?.headers[i]?.render("Header")}:</Box>}
            <Box textAlign="right">{cell.render("Cell")} </Box>
          </Td>
        );
      })}
    </Tr>
  );
};

export default memo(TableRow);
