import { useSelector } from "react-redux"
import { statusFilters } from "../filters/filterSlice"

const StatusFilter = () => {
    const status = useSelector(state => state.filters.status);

    const renderedFilters = Object.keys(statusFilters).map((key) => {
        const value = statusFilters[key]
        const className = value === status ? 'selected' : ''

        return (
            <li key={value}>
                <button className={className}>
                    {key}
                </button>
            </li>
        )
    })

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

export default StatusFilter