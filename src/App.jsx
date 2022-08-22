import Authors from './components/Authors'
import Books from './components/Books'

function App() {

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl text-center font-bold text-indigo-900">Books and Authors</h2>
      <div className="mt-12 md:flex">
        <Authors/>
        <Books/>
      </div>
    </div>
  )
}

export default App
