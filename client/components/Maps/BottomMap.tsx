import React, {useState} from 'react';
import cn from "classnames";

const BottomMap = () => {
    const [dis, setdis] = useState<any>(true)

    const CN = cn("bottomWrapMap", { bottomWrapActive: !dis})

    return (
        <div id="bottomWrapMap" className={CN}  onClick={() => setdis(false)}>
            <iframe className="solarmap"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7101d71b5e48403f7070e693c9bbdd9ef70cc6b284ae637d9e1edb34bd0613e&amp;source=constructor"
                    width="100%" height="640"/>
        </div>
    )
}

export default BottomMap;
