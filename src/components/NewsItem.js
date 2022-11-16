import React from 'react'
import ReactTimeAgo from 'react-time-ago'
export default function NewsItem({title, description, urlToImage, newsUrl, altText, publishedAt, source, author}){

        //  <!--News Cards --> 
        return (
            <div key={newsUrl} className="rounded overflow-hidden shadow-lg relative font-newFont  w-96">
                <div className="badge absolute bg-orange-400 rounded-full px-1 py-1 font-bold font-newFont right-1 top-1 z-10 " style={{ fontSize: "10px" }}>{source}</div>
                <img className="w-full bg-center bg-cover h-52 shadow-lg" src={urlToImage ? urlToImage : "/images/images.png"} alt={altText} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl my-2">{title && title.slice(0, 27)} ...</div>
                    <p className="text-gray-700 text-base">
                        {description ? (description.length<70?description+"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente debitis impedit totam inventore molestiae tenetur sit, vitae aspernatur aliquam obcaecati nulla sequi, iste nesciunt odio animi expedita alias quia harum ratione minima! Voluptatum, voluptatem impedit eveniet delectus, libero enim ad quidem fugiat ratione beatae labore eligendi corrupti unde aut itaque ab soluta! Accusantium unde recusandae maxime. Debitis, totam at minima doloremque eum rem velit possimus atque maiores quas".slice(0,70):description.slice(0, 70)):"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente debitis impedit totam inventore molestiae tenetur sit, vitae aspernatur aliquam obcaecati nulla sequi, iste nesciunt odio animi expedita alias quia harum ratione minima! Voluptatum, voluptatem impedit eveniet delectus, libero enim ad quidem fugiat ratione beatae labore eligendi corrupti unde aut itaque ab soluta! Accusantium unde recusandae maxime. Debitis, totam at minima doloremque eum rem velit possimus atque maiores quas".slice(0,70)} ...
                    </p>
                    <div className='my-5'>
                        Published by <span className='font-bold'>{author ? (author.length>14?author.slice(0,14):author) : "Unknown"} </span><ReactTimeAgo date={publishedAt} locale="en-US" />
                    </div>
                    <div className="read-more-btn my-5">
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="cursor-pointer text-white bg-black hover:bg-black focus:outline-none font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-black  dark:focus:ring-gray-700 dark:border-gray-700 ">Read More</a>
                    </div>
                </div>
            </div>
        )
 
}