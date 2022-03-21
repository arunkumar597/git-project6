import React, { createContext, useState } from "react";

export const Content = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : "Alia bhatt",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "sep 04 2021",
            "ImageAsset"    : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/BeFunky-collage__71__0_1200x768.jpeg?TRCDau8AiMSl4DfGUTj9MRTNDDQoObvh&size=770:433",
            "BlogContent"   : "Alia has only a 10-minute cameo role in RRR whereas she is seen in almost every frame of Gangubai Kathiawadi.",
            "Likes"         : "5k"
        },
        {
            "Title" : "Shriya saran",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://biooverview.com/wp-content/uploads/2021/06/Shriya-4.jpg",
            "BlogContent"   :"While Shriya is part of magnum opus RRR and got enough attention for her presence in the trailer as well, there are rumours that she is unhappy for not being part of the film's promotions.",
            "Likes"         : "8k"
        },
        {
            "Title" : "Ajay Devgn",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.hindustantimes.com/img/2021/04/02/1600x900/Screenshot_2021-04-02_at_12.48.14_PM_1617348263413_1617348272562.png",
            "BlogContent"   : "Ajay Devgn, has reportedly charged Rs 25 crore for the film.",
            "Likes"         : "502"
        },
        {
            "Title" : "Olivia Morris",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://blogger.googleusercontent.com/img/a/AVvXsEjTohd0RWv2ia7RII4fKEkgMfbrNXM7mNzSRR_iMu6dCFuYmAYVop1-etAKZU-DZIOfuZJK0ixkbZlATVmvGJh5aGtQpRCV0_H79zQgwWi6t3ghB1S1jlHwGZoVTkc4YibLoqWps0OhcmeUeGBN33XixyDK5cHhkvA5b85po3C51z5GiYcg6TME2CmD=w400-h226",
            "BlogContent"   : " Olivia Morris is an Hollywood film Actress, she is making her debut in Telugu opposite Jr NTR in RRR",
            "Likes"         : "6k"
        },
        {
            "Title" : "RRR",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www.infoflick.com/imgq/500x70/2020/03/rrr_22.jpg",
            "BlogContent"   : "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
            "Likes"         : "4k"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : "Humanoid Robot",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://img.etimg.com/thumb/msid-74254499,width-640,resizemode-4,imgsize-412413/sophia-in-red-bengali-saree.jpg",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "50k"
        },
        {
            "Title" : "Microscope",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "501"
        },
        {
            "Title" : "Autonomous Robo",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://royalsocietypublishing.org/cms/asset/89999849-929b-48c5-91f8-3a4644d9a814/21fig1.jpg",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "502"
        },
        {
            "Title" : "Robot",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://5.imimg.com/data5/PQ/GB/AV/SELLER-23936769/robb-500x500.png"  ,
            "BlogContent" : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "503"
        },
        {
            "Title" : "Robo",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://aicd.companydirectors.com.au/-/media/cd2/resources/advocacy/governance-leadership-centre/images/170324-update/glc-mar17-changing-governance-in-new-age2_650x359.ashx",   "BlogContent" : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "504"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : "Spider Man",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.indianexpress.com/2021/11/spider-man-no-way-home-new-poster-1200.jpg",
            "BlogContent"   : "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel ...",
            "Likes"         : "5k"
        },
        {
            "Title" : "Dune",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://ucsdguardian.org/wp-content/uploads/2021/11/Villeneuve-Dune-courtesy-of-TV-Insider.jpeg",
            "BlogContent"   : "A mythic and emotionally charged hero's journey, 'Dune' tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his ...",
            "Likes"         : "50k"
        },
        {
            "Title" : "Batman",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszv5WzRGhPjmRQmIszwRr82gyU-j5jMwSdg&usqp=CAU",
            "BlogContent"   : "The Batman released its first trailer at DC FanDome in August 2020, and since then, there have been multiple delays before finally getting to the March 2022 release.",
            "Likes"         : "8k"
        },
        {
            "Title" : "Save Nature",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://content.thriveglobal.com/wp-content/uploads/2021/04/hand-holding-tree-save-nature-ecology-concept-human-hand-holding-tree-against-blurred-natural-background-save-nature-ecology-earth-170233320-1.jpg",
            "BlogContent"   : "Healthy ecosystems clean our water, purify our air, maintain our soil, regulate the climate, recycle nutrients and provide us with food.",
            "Likes"         : "12k"
        },
        {
            "Title" : "Nature",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://wallpapercave.com/wp/NGD9aMj.jpg",
            "BlogContent"   : "Nature can refer to the general realm of living plants and animals, and in some cases to the processes associated with inanimate objects.",
            "Likes"         : "6k"
        }
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : "Gym",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://image.shutterstock.com/image-photo/athletic-shirtless-young-sports-man-260nw-695401201.jpg",
            "BlogContent"   : "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.",
            "Likes"         : "2k"
        },
        {
            "Title" : "Walking",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "BlogContent"   : "Physical activity doesn't need to be complicated. Something as simple as a daily brisk walk can help you live a healthier life.",
            "Likes"         : "3k"
        },
        {
            "Title" : "Workout",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "BlogContent"   : "As a general goal, aim for at least 30 minutes of moderate physical activity every day. If you want to lose weight.",
            "Likes"         : "4k"
        },
        {
            "Title" :"Yoga",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
            "BlogContent"   : "yoga can support the healing process and help the person experience symptoms with more centeredness and less distress.",
            "Likes"         : "5k"
        },
        {
            "Title" : "Healthy Food",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg",
            "BlogContent"   : "Fish,Broccoli or any of the cruciferous vegetables, Beets,Spinach and other leafy green vegetables.",
            "Likes"         : "6k"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : "Dry Fruits",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://5.imimg.com/data5/SELLER/Default/2021/7/JS/SH/JU/5832544/dry-fruits-500x500.png",
            "BlogContent"   : "Cashews are a rich source of vitamins E and B6. Walnuts are loaded with vital Omega-3 fatty acids.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Pizza",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*",
            "BlogContent"   : "That did start in Italy. Specifically, baker Raffaele Esposito from Naples is often given credit for making the first such pizza pie.",
            "Likes"         : "2k"
        },
        {
            "Title" : "Burger",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=60",
            "BlogContent"   : "A burger, in itself is not junk food. It is considered junk food due to the company it keeps.",
            "Likes"         : "3k"
        },
        {
            "Title" : "watermelon",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg",
            "BlogContent"   : "Watermelon is a sweet and refreshing low calorie summer snack. It provides hydration and also essential nutrients, including vitamins, minerals, and antioxidants.",
            "Likes"         : "4k"
        },
        {
            "Title" : "Maggie",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www.desiclik.com/images/P/6c2d0b6c0c578544e72045a900d5e25fab4c067289543e7e6b67354458b14d00-01.jpg",
            "BlogContent"   : " is , Veg  AATA maggi is healthy !",
            "Likes"         : "5k"
        }
    ]);

    return(
        <Content.Provider   value={ { value1 : [bollywood, setBollywood],
                                          value2 : [hollywood,setHollywood],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </Content.Provider>
    )
}