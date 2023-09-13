import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getStudentsData } from "../Redux/StudentReducer/action";


export function LatestTable() {

    const studentsData = useSelector((store) => store.StudentReducer.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentsData());
    }, []);

    // console.log('studentsData:', studentsData)

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Enr. No</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">S.Name</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">C.Name</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Fees</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Enr. Date</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {studentsData && studentsData?.map((el) => (
                    <TableRow key={el.id}>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.enrollmentNumber}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.firstName} {el.lastName}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.companyName}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.fees}</TableCell>
                        <TableHead className="text-[14px] font-400 text-[#212529]">{el.enrollmentDate}</TableHead>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
