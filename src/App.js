import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import './App.css'
import HomePage from './components/Home.page'
import RQSuperheroesPage from './components/RQSuperheroes.page'
import SuperheroesPage from './components/Superheroes.page'
import RQsuperheroesPageExercise from './components/RQsuperheroesPageExercise'
import RQSuperHeroPage from './components/RQSuperHero.page'
import ParallelQueriesPage from './components/ParallelQueries.page'
import DynamicParallelPage from './components/DynamicParallel.page'
import DependentQueriesPage from './components/DependentQueries.page'
import PaginatedQueriesPage from './components/PaginatedQueries.page'
import InfiniteQueriesPage from './components/InfiniteQueries.page'


function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroesex'>RQ Super Heroes Exercise</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>RQ Super Heroes Parallel</Link>
              </li>
              <li>
                <Link to='/rq-dynamic-parallel'> Dynamic RQ Super Heroes Parallel</Link>
              </li>
              <li>
                <Link to='/rq-dependent'> DependentQueries</Link>
              </li>
              <li>
                <Link to='/rq-paginated'> PaginatedQueries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element= {<HomePage/>}/>
            <Route path='/super-heroes' element = {<SuperheroesPage/>}/>
            <Route path='/rq-super-heroes/:heroId' element = {<RQSuperHeroPage />}/>
            <Route path='/rq-super-heroes' element = {<RQSuperheroesPage />}/>
            <Route path='/rq-super-heroesex' element = {<RQsuperheroesPageExercise />}/>
            <Route path='/rq-parallel' element = {<ParallelQueriesPage />}/>
            <Route path='/rq-dynamic-parallel' element = {<DynamicParallelPage heroIds={[1,3]} />}/>
            <Route path='/rq-dependent' element = {<DependentQueriesPage email = 'vishwas@example.com'/>}/>
            <Route path='/rq-paginated' element = {< PaginatedQueriesPage/>}/>
            <Route path='/rq-infinite' element = {< InfiniteQueriesPage/>}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen = {false} position= 'bottom-right'/>
    </QueryClientProvider>
  )
}

export default App
