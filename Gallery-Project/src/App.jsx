import React, { useEffect, useState } from 'react'

// Use native fetch (no axios dependency required)
const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=24')
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.error('fetch error', err)
    } finally {
      setLoading(false)
    }
  }

  // optional: load on mount
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='bg-black min-h-screen text-white'>
      <div style={{ padding: 16 }}>
        <button onClick={getData}
          style={{ background: '#16a34a', padding: '8px 12px', borderRadius: 8, color: '#fff' }}>
          {loading ? 'Loading…' : 'Refresh'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, padding: 16 }}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
              <img src={item.download_url} alt={item.author} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: 8 }}>
                <div style={{ fontSize: 14, color: '#111' }}>{item.author}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{item.width}x{item.height}</div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ color: '#fff', padding: 16 }}>No images yet — click Refresh</div>
        )}
      </div>
    </div>
  )
}

export default App
