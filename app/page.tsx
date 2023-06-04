import { getData } from '@/app/getData'
import { Users } from '@/app/types'
import UserCard from '@/app/components/user-card'

export default async function Home() {
  const users: Users = await getData()
  const renderedUsers = users.map((item) => <UserCard key={item.linkedIn} {...item} />)

  return (
    <main className="text-md flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-5 py-12">
        <div className="-mx-4 flex flex-wrap">{renderedUsers}</div>
      </div>
    </main>
  )
}
