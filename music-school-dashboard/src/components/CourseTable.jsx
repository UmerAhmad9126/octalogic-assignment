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
import { getCourseData } from "../Redux/CourseReducer/action";
import action from "../images/action.png"


export function CourseTable() {

    const courses = useSelector((store) => store.CourseReducer.courses);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCourseData())
    }, []);

    console.log('courses:', courses)

    return (
        <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Name</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Description</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Instructor</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Instrument</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Day of Week</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]"># of Students</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Price</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Status</TableHead>
                    <TableHead className="text-[14px] font-400 text-[#212529]">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {courses.map((el) => (
                    <TableRow key={el.id}>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.name}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.description.substring(0, 10)}...</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.instructor}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.instrument}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.dayOfWeek}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.numberOfStudents}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.price}</TableCell>
                        <TableCell className="text-[14px] font-400 text-[#212529]">{el.status === "Open" ? (
                            <button className="w-[66px] h-[24px] rounded-[4px] bg-[#CFF9DF]">Active</button>
                        ) : (
                            <button className="w-[66px] h-[24px] rounded-[4px] bg-[#FEC0CA]">Closed</button>
                        )}</TableCell>
                        <TableCell>
                            <img src={action} alt="action" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
