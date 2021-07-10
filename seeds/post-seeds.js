const { Post } = require('../models');

const postData = [{
        title: "A Lobster Diver In Cape Cod Says A Humpback Whale Scooped Him Up And Spat Him Out",
        post_content: "Michael Packard says he was trapped in the whale's mouth for 30 to 40 seconds before it tossed him back in the water, bruised but otherwise unharmed. Experts tell NPR such events are extremely rare.",
        user_id: 3
    },
    {
        title: "Big Jake, World’s Tallest Horse, Dies In Wisconsin At Age 20",
        post_content: "The 20-year-old Belgian named Big Jake lived on Smokey Hollow Farm in Poynette. Valicia Gilbert, wife of the farm’s owner, Jerry Gilbert, said Big Jake died two weeks ago but declined to give the exact date of death when The Associated Press reached her Monday via Facebook. Big Jake was 6-foot-10 (nearly 2.1 meters) and weighed 2,500 pounds (1,136 kilograms). The Guinness Book of World Records certified him as the world’s tallest living horse in 2010.",
        user_id: 2
    },
    {
        title: "Border Patrol Sends Back 7 Canadians Who Used Library Lawn To Enter US",
        post_content: "Seven people apprehended after entering Vermont illegally from Quebec by driving across the lawn of a library built in both the United States and Canada were immediately returned to Canada, the U.S. Border Patrol said Thursday.",
        user_id: 7

    },
    {
        title: "Picasso Painting Hidden in Maine Closet for 50 Years Sold",
        post_content: "The 16 x 16 inch mixed-media painting is believed to have been painted in 1919 as a study for the stage curtain the Spanish artist painted for a ballet.",
        user_id: 5
    },
    {
        title: "Woman Wore Same Hawaiian Shirt To 264 Zoom Meetings - And No One Noticed",
        post_content: "'The first month, I was like, this is really funny. Then it’d be like, oh, I’m still wearing this,' she told Inside Edition.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;