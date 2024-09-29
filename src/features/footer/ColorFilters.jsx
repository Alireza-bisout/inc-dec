import { useDispatch, useSelector } from "react-redux"

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']

const ColorFilters = () => {
    const colors = useSelector(state => state.filters.colors);
    const dispatch = useDispatch();

    const renderedColors = availableColors.map((color) => {
        const checked = colors.includes(color);
        const changeType = checked ? 'removed' : 'added';

        const handleChangeColor = (color, changeType) => {
            dispatch({
                type: 'filters/changeColorFilter',
                payload: {
                    color: color,
                    changeType: changeType
                }
            })
        }

        return (
            <label key={color}>
                <input
                    type="checkbox"
                    name={color}
                    defaultChecked={checked}
                    onChange={() => handleChangeColor(color, changeType)}
                />
                <span
                    className="color-block"
                    style={{
                        backgroundColor: color,
                    }}
                ></span>
                {color}
            </label>
        )
    })

    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
    )
}

export default ColorFilters
