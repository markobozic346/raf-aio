import { Collapse, Td, Tr } from '@chakra-ui/react'
import { useState } from 'react'
import { Row } from 'react-table'

interface Props {
    row: Row<object>;
}

const MobileTableRow = ({ row }: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <Tr {...row.getRowProps()}>
            {row.cells.map((cell) => <Td>{cell.render('Cell')   }</Td> )}
            <Collapse />
       </Tr>
    )
}

export default MobileTableRow
