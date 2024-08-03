//application level middleware

function middleware(req,res,next){
    console.log('Middleware1')
    next()
}

app.use(middleware)

//router level

const router = express.Router()
router.use(middleware)

//error handling middleware
function errMiddleware(err, req,res, next){
    console.log(err.stack)
}

app.use(errMiddleware)


