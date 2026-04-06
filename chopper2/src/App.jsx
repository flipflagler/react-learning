import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div>
        the count is {count}
      </div>
      <div>
        <button onClick={() => setCount(count + 1)} style={{margin: '5px'}}>+</button>
        <button onClick={() => setCount(count - 1)} style={{margin: '5px'}}>-</button>
      </div>
    </div>
  </>
  )
}

export default App