// modules/PendulumModule/index.jsx

function PendulumModule() {
  return (
    <div style={{
      border: '1px solid #333',
      borderRadius: '12px',
      padding: '20px',
      margin: '10px 0',
      backgroundColor: '#0b1326',
      color: '#fff'
    }}>
      <h2>🔬 Маятник</h2>
      <p>Период колебаний: <strong>T = 2π √(L/g)</strong></p>
      <button style={{
        background: '#D32F2F',
        border: 'none',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Рассчитать
      </button>
    </div>
  );
}

export default PendulumModule;