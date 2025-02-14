import { memo } from "react";
import { PropTypes } from "prop-types";

const CalendarComponent = memo((props) => {
    return (
        <div>
            <iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=Asia%2FKolkata&showTitle=0&showNav=0&showTz=0&showPrint=0&showCalendars=0&src=c2Fpa2F0YWRoaWthcnkuYmNhQGdtYWlsLmNvbQ&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" width={props.width} height={props.height} ></iframe>
        </div>
    );
});

CalendarComponent.displayName = 'CalendarComponent';

CalendarComponent.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

export default CalendarComponent;
