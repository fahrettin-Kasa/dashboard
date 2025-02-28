import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="students"/>
        <UserCard type="teachers"/>
        <UserCard type="parents"/>
        <UserCard type="staffs"/>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>
        </div>
        <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
        </div>
      </div>
      <div className="w-full h-[500px]">
        <FinanceChart/>
      </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default page