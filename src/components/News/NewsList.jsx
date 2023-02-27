import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListLoader } from 'components/common/ListLoader/ListLoader';
import { NewsItem } from './NewsItem';
import { List } from './NewsList.styled';
import { fetchNews } from 'redux/news/news-operations';
import { selectIsLoading, selectNews, selectFilter } from '../../redux/news/news-selectors';
import { NoAnimals } from 'components/User/NoAnimals/NoAnimals';

export const NewsList = () => {
    const dispatch = useDispatch();
    const news = useSelector(selectNews);
    const isLoading = useSelector(selectIsLoading);
    const search = useSelector(selectFilter);
  
    useEffect(() => {
        const controller = new AbortController();
        dispatch(fetchNews({
            search,
        }));
        return () => controller.abort();
    }, [dispatch, search]);

   if (isLoading) {
    return <ListLoader />
    }
   if (news.length === 0) {
    return <NoAnimals>Sorry, there are no news!</NoAnimals>;
    }

    return isLoading ? (
        <ListLoader />
    ) : ( 
        <>
            <List
                initial={{
                    y: -70,
                    opacity: 0.3,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                    duration: 0.7,
                    type: 'cubic-bezier(.49,.99,.82,.98)',
                    delayChildren: 0.5,
                    },
                }}
            >
                {news.map(({ _id, title, description, date, url }) => {
                    return (
                        <NewsItem
                            key={_id}
                            title={title}
                            description={description}
                            date={date}
                            url={url}
                        />
                    )
                })}
            </List>
        </>
    );
};

