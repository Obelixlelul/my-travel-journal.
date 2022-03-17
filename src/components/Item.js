import pin from '../assets/pin.svg';

export default function Item(props) {
    return (
        <>
            <div className="main">
                <div className="item-container">
                    <div className="item-img-container">
                        <div className="item-img">
                            <img src={props.data.imageUrl} alt="" />
                        </div>
                    </div>

                    <div className="item-description-container">
                        <div className="item-description">

                            <span>
                                <img src={pin} alt="" className="item-description-pin" />
                                <span className="item-description-location">{props.data.location.toUpperCase()}</span>
                                <span className="item-description-link"><a href={props.data.googleMapsUrl}>View on google Maps</a></span>
                            </span>
                            <h1>{props.data.title}</h1>
                            <h2>{props.data.startDate} - {props.data.endDate}</h2>
                            <h3>{props.data.description}</h3>

                        </div>
                    </div>
                </div>
                <hr className="solid"></hr>
            </div>

        </>
    );
}