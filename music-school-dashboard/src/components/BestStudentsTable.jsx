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


export function BestStudentsTable() {

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
                    <TableHead className="text-[14px] font-400 text-[#212529]">Reg. No</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">F.Name</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">L.Name</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Courses #</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Total Fees</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Reg. Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {studentsData && studentsData?.map((el) => (
                    <TableRow key={el.id}>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.registrationNumber}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.firstName}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.lastName}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.coursePurchased}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.totalFees}</TableCell>
                        <TableHead className="text-[14px] font-400 text-[#212529]">{el.registrationDate}</TableHead>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
