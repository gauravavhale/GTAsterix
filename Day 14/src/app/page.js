import React from 'react'
import Card from '@/components/Card/Card'

const Home = () => {
  return (
    <main className="p-6 flex flex-wrap justify-center gap-6">
      <Card title="Users" value="1,240" icon="👥" />
      <Card title="Orders" value="320" icon="📦" />
      <Card title="Revenue" value="₹75,000" icon="💰" />
      <Card title="Products" value="85" icon="🛍️" />
    </main>

  )
}

export default Home