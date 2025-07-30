const NewsItem = ({item}) =>(
    <div className='card mb-4'>
        <div className='card-body'>
            <a href={item.url}
                target ='_blank'
                rel='noopener noreferrer'
                style={{color: '#424242'}}>
                    <h5 className='card-title'>{item.title}</h5>
                </a>
                <a href={item.url}
                target ='_blank'
                rel='noopener noreferrer'
                style={{color: '#424242'}}>
                    {item.content}
                </a>
                
        </div>
    </div>
)
function NewsList({news}){
    return(
        <div>
            {news && news.length === 0 && <h4>There is no News</h4>}
            {news && news.map(item => <NewsItem key={item.title} item={item} />)}
        </div>
    )
}
export default NewsList;