import PropTypes from 'prop-types'
import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function HeroSlider(props) {

    let { title, heading, description, personRead, imageUrl, Date } = props.sliderText
    return (
        <div className='flex items-center px-52 py-10 justify-center my-10 ' >
            <div className="slider-image w-1/2 "><img className='bg-center bg-cover h-[21rem]' src={imageUrl} alt="" /></div>
            <div className="slider-text p-12 w-1/2 h-[21rem] mt-2" style={{ backgroundColor: "#F8F9FA" }} >
                <span className='tracking-wider text-base text-gray-500  mt-1' >{title}</span>
                <h2 className='text-2xl font-normal  text-black  mt-2 mb-4 leading-7'><a href="/">{heading}</a></h2>
                <p className='text-[14.4px] font-light leading-5 text-gray-500'>{description + " adipisicing elit. Soluta pariatur officia aspernatur, accusamus repellat quibusdam labore eligendi, obcaecati magni similique temporibus voluptatibus consectetur ut? Excepturi perferendis hic dicta"}</p>

                <div className="post-data mt-5 flex flex-col">
                    <span className='font-bold  text-gray-900 '>{personRead} </span>
                    <div className="post-data-footer flex  items-center text-gray-500">
                        <div className='my-1'>
                            Published by <span className='font-bold'>{personRead ? personRead : "Unknown"} </span><ReactTimeAgo date={Date} locale="en-US" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

HeroSlider.propTypes = {
    title: PropTypes.string, heading: PropTypes.string, description: PropTypes.string, personRead: PropTypes.string, Date: PropTypes.string, timeRead: PropTypes.string
};
HeroSlider.defaultProps = {
    title: "Enter a title"
}
