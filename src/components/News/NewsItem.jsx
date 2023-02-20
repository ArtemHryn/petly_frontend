import { Item, ItemTitle, Text, ItemDate, Link, Gradient, BottomContainer } from './NewsItem.styled';

export const NewsItem = ({ title, description, date, url }) => {

  const dateFormatting = (date) => {
    return date.split('-').reverse().join('/');
  }

  return (
    <Item>
      <Gradient></Gradient>
      <ItemTitle>{title}</ItemTitle>
      <Text>{description}</Text>
      <BottomContainer>
        {date ? <ItemDate>{dateFormatting(date)}</ItemDate> : <ItemDate>--/--/----</ItemDate>}
        <Link
          href={url}
          target="_blank"
        >
          Read more
        </Link>
      </BottomContainer>
    </Item>
  )
};