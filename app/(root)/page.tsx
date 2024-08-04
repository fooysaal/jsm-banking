import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn = { firstName: 'Foysal', LastName: 'Ahamed' }
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welocme"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions effortlessly."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={321.25}
          />
        </header>
      </div>
    </section>
  )
}

export default Home