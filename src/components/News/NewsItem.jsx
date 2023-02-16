import { Item, ItemTitle, Text, ItemDate, Link, Gradient, BottomContainer } from './NewsItem.styled';

export const NewsItem = () => {

    return <>
        <Item>
          <Gradient></Gradient>
          <ItemTitle>Обережно, кліщі! Як уберегти улюбленця</ItemTitle>
            <Text>
            Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності.
            З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб
            уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.
            </Text>
            <BottomContainer>
                <ItemDate>20/02/2021</ItemDate>
                <Link>Read more</Link>
            </BottomContainer>
        </Item>

        <Item>
          <Gradient></Gradient>
          <ItemTitle>В День ветеринара в столиці пройде...</ItemTitle>
            <Text>
            В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг
            на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством
            «Київська міська лікарня ветеринарної медицини»,
            </Text>
            <BottomContainer>
                <ItemDate>20/02/2021</ItemDate>
                <Link>Read more</Link>
            </BottomContainer>
        </Item>
         
        <Item>
          <Gradient></Gradient>
          <ItemTitle>У Телеграмі запрацював чат-бот</ItemTitle>
            <Text>
            У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні
            ветеринарні консультації щодо догляду та лікування тварин.
            Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot.
            </Text>
            <BottomContainer>
                <ItemDate>20/02/2021</ItemDate>
                <Link>Read more</Link>
            </BottomContainer>
        </Item>

        <Item>
          <Gradient></Gradient>
          <ItemTitle>В столиці запрацював тимчасовий притулок</ItemTitle>
            <Text>
            Завдяки зусиллям столичних служб та волонтерів, у столиці запрацював тимчасовий
            притулок для тварин “Виставковий центр”, який діє на території 16 павільйону на ВДНГ.
            Притулок даватиме прихисток тваринам...
            </Text>
            <BottomContainer>
               <ItemDate>20/02/2021</ItemDate>
               <Link>Read more</Link> 
            </BottomContainer>
        </Item>

        <Item>
          <Gradient></Gradient>
          <ItemTitle>Собаки, кішки, як і люди, старіють..</ItemTitle>
            <Text>
            Зрілий вік вихованця – велика відповідальність для дбайливого власника.
            Старіння неможливо зупинити, але як процеси будуть відбуватись саме у вашого вихованця,
            багато в чому залежить від умов утримання...
            </Text>
            <BottomContainer>
                <ItemDate>20/02/2021</ItemDate>
                <Link>Read more</Link>
            </BottomContainer>
          
        </Item>

        <Item>
          <Gradient></Gradient>
          <ItemTitle>Чому коти норовлять сунути хвіст в обличчя</ItemTitle>
            <Text>
            Любителі котів зазвичай досконально знають характер своїх пухнастиків.
            Одних обов'язково потрібно погладити перед їжею, інші чекають, поки ви відкладете книгу,
            щоб лягти до вас в ліжко. Але іноді коти поводяться так, що навіть...
            </Text>
            <BottomContainer>
                <ItemDate>20/02/2021</ItemDate>
                <Link>Read more</Link>
            </BottomContainer>
        </Item>
  </>;
}