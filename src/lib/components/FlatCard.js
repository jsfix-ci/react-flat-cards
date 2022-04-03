import React, { useState } from 'react';
import './FlatCard.scss';

export default function FlatCard({
    thumbnail,
    title,
    description,
    secondaryText,
    className,
    thumbnailClass,
    contentWrapperClass,
    contentHeaderClass,
    secondaryContainer,
    readMoreEnabled,
    readMoreCharacterLimit,
    togglerItems,
    togglerClass,
}) {

    const [isShowingMore, setIsShowingMore] = useState(false);

    const _className = className ? className + " " : "";
    const _thumbnailClass = thumbnailClass ? thumbnailClass + " " : "";
    const _contentWrapperClass = contentWrapperClass ? contentWrapperClass + " " : "";
    const _contentHeaderClass = contentHeaderClass ? contentHeaderClass + " " : "";
    const _readMoreCharacterLimit = readMoreCharacterLimit ? readMoreCharacterLimit : 100;
    const _togglerItems = togglerItems ? togglerItems : [];

    const handleReadMoreToggle = () => {
        setIsShowingMore(!isShowingMore);
    }




    return (
        <div className={_className + 'FlatCard'}>
            <img className={_thumbnailClass + 'FlatCard--Img'} src={thumbnail} alt="card thumbnail" />
            <div className={_contentWrapperClass + 'FlatCard--Content'}>
                <div className={_contentHeaderClass + 'FlatCard--ContentHeader'}>
                    <p className='FlatCard--Title'>{title}</p>
                    {
                        secondaryContainer ? secondaryContainer : <p className='FlatCard--Price'>{secondaryText}</p>
                    }

                </div>

                {
                    readMoreEnabled === true ?
                        (
                            <>
                                <p className='FlatCard--Description ReadMoreEnabled'>{isShowingMore ? description : description.substring(0, _readMoreCharacterLimit) + "..."}</p>
                                <button className={isShowingMore ? "FlatCard--ReadMoreBtn Active" : "FlatCard--ReadMoreBtn"} onClick={handleReadMoreToggle} type='text'>{isShowingMore ? "Read Less" : "Read More"}</button>
                            </>
                        ) :
                        (
                            <p className='FlatCard--Description'>{description}</p>
                        )
                }
            </div>
        </div>
    );
}
