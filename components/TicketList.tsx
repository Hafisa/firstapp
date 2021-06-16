import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Carousel from '../Carousel'
export default function TicketList() {
    //static value for tickets page
    const ticketDatas = [
        {
            index: 1,
            items: [
                {
                    id: 1,
                    referencenumber: "7468902-WL",
                    name: "MERCEDES GTS2020",
                    date: "18/02/2020",
                    nooftickets: 2,
                    itemimage: "https://shop.samsung.com/gr/images/samsung-clear-cover-galaxy-s21-transparent/24286/2000x2000/EF-QG996TTEGWW.png",
                    wonimage: "https://purepng.com/public/uploads/large/gold-biscuits-70z.png",
                },
                {
                    id: 2,
                    referencenumber: "9464202-WL",
                    name: "OLEX DAYTONA",
                    date: "20/07/2020",
                    nooftickets: 2,
                    itemimage: "https://purepng.com/public/uploads/large/purepng.com-blazerclothingblazerfashion-men-dress-cloth-coat-blazer-jacket-631522326994zcclv.png",
                    wonimage: "http://www.pngmart.com/files/6/Watch-Transparent-PNG.png",
                },
                {
                    id: 3,
                    referencenumber: "7561202-WL",
                    name: "I PHONE",
                    date: "04/10/2020",
                    nooftickets: 2,
                    itemimage: "http://www.pngmart.com/files/6/Watch-Transparent-PNG.png",
                    wonimage: "https://th.bing.com/th/id/Rd804a0ca3708e9b5ea32f7c31398a018?rik=VX1OenSQtJ1qpg&pid=ImgRaw",
                },

            ]
        },
        {
            index: 2,
            items: [
                {
                    id: 1,
                    referencenumber: "7464602-WL",
                    name: "SAMSUNG PHONE",
                    date: "19/02/2020",
                    nooftickets: 2,
                    itemimage: "https://purepng.com/public/uploads/large/purepng.com-blazerclothingblazerfashion-men-dress-cloth-coat-blazer-jacket-631522326994zcclv.png",
                    wonimage: "https://shop.samsung.com/gr/images/samsung-clear-cover-galaxy-s21-transparent/24286/2000x2000/EF-QG996TTEGWW.png",
                },
                {
                    id: 2,
                    referencenumber: "9464202-WL",
                    name: "OLEX DAYTONA",
                    date: "30/07/2020",
                    nooftickets: 2,
                    itemimage: "https://th.bing.com/th/id/Ra1cb8b4418adb19a0e95a26016438edf?rik=U4FU0QQfqseAag&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f1%2fLaptop-PNG-Transparent-Image.png&ehk=QiJcw7UkBG52hCpxWcilQSTCWoPS58SJTAHAMGoGvz8%3d&risl=&pid=ImgRaw",
                    wonimage: "http://www.pngmart.com/files/6/Watch-Transparent-PNG.png",
                },
                {
                    id: 3,
                    referencenumber: "7561202-WL",
                    name: "MERCEDES GTS2020",
                    date: "12/10/2020",
                    nooftickets: 2,
                    itemimage: "http://www.pngmart.com/files/6/Watch-Transparent-PNG.png",
                    wonimage: "https://purepng.com/public/uploads/large/gold-biscuits-70z.png",
                },
                {
                    id: 4,
                    referencenumber: "7561202-WL",
                    name: "I PHONE",
                    date: "04/10/2020",
                    nooftickets: 2,
                    itemimage: "https://th.bing.com/th/id/Ra1cb8b4418adb19a0e95a26016438edf?rik=U4FU0QQfqseAag&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f1%2fLaptop-PNG-Transparent-Image.png&ehk=QiJcw7UkBG52hCpxWcilQSTCWoPS58SJTAHAMGoGvz8%3d&risl=&pid=ImgRaw",
                    wonimage: "https://th.bing.com/th/id/Rd804a0ca3708e9b5ea32f7c31398a018?rik=VX1OenSQtJ1qpg&pid=ImgRaw",
                },

            ]
        },
        {
            index: 3,
            items: [
                {
                    id: 1,
                    referencenumber: "7468902-WL",
                    name: "MERCEDES GTS2020",
                    date: "18/02/2020",
                    nooftickets: 2,
                    itemimage: "https://shop.samsung.com/gr/images/samsung-clear-cover-galaxy-s21-transparent/24286/2000x2000/EF-QG996TTEGWW.png",
                    wonimage: "https://purepng.com/public/uploads/large/gold-biscuits-70z.png",
                },
                {
                    id: 2,
                    referencenumber: "9464202-WL",
                    name: "OLEX DAYTONA",
                    date: "20/07/2020",
                    nooftickets: 2,
                    itemimage: "https://purepng.com/public/uploads/large/purepng.com-blazerclothingblazerfashion-men-dress-cloth-coat-blazer-jacket-631522326994zcclv.png",
                    wonimage: "http://www.pngmart.com/files/6/Watch-Transparent-PNG.png",
                },
                {
                    id: 3,
                    referencenumber: "7561202-WL",
                    name: "I PHONE",
                    date: "04/10/2020",
                    nooftickets: 2,
                    itemimage: "http://www.pngmart.com/files/6/Watch-Transparent-PNG.png",
                    wonimage: "https://th.bing.com/th/id/Rd804a0ca3708e9b5ea32f7c31398a018?rik=VX1OenSQtJ1qpg&pid=ImgRaw",
                },

            ]
        },

    ]
    return (
        <View style={styles.container}>
            {ticketDatas.map((obj, index) => {
                return (
                    <Carousel
                        key={index}
                        itemsPerInterval={1}
                        items={obj.items}
                    />
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
