import { useNavigate } from 'react-router-dom';
import './BasicInfo.css';

export default function BasicInfo() {

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return <>
        <h3>ADD NEW PROPERTY</h3>
        <div className='property-navbar'>
            <ol>
                <li>Basic Info</li>
                <li onClick={() => navigate('/generalInfo')}>Property Detail</li>
                <li onClick={() => navigate('/propertydetails')}>General Info</li>
                <li onClick={() => navigate('/locationInfo')}>Location Info</li>
            </ol>
        </div>
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <div className='field-container'>
                    <div>
                        <label>Property Type</label>
                        <select>
                            <option>House</option>
                            <option>Flat</option>
                            <option>FarmHouse</option>
                            <option>Penthouse</option>
                        </select>
                        <label>Negotable</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" />

                        <label>Ownership</label>
                        <select>
                            <option>dealer</option>
                            <option>owner</option>
                        </select>
                    </div>
                    <div>
                        <label>Property Age</label>
                        <input type="number" />
                        <label>Property Approved</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div>
                        <label>Property Description</label>
                        <input type="text" />
                        <label>Bank Loan</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </>
}