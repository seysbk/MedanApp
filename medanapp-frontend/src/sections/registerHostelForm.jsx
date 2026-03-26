export default function RegisterHostelForm (){
    return (
        <div className="form-card">
                <div className="form-header">
                    <h1>Register Your Hostel</h1>
                    <p>Expand your reach and find the perfect student residents today.</p>
                </div>

                <form className="form-grid">
                    <div className="input-group full-width">
                        <label>Hostel Name  *</label>
                        <input type="text" className="input-field" placeholder="e.g. GreenHouse Residence" required/>
                    </div>

                    <div className="input-group">
                        <label>Location  *</label>
                        <select name="location" id="location">
                            <option value="" selected></option>
                            <option value=""></option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Digital Address  *</label>
                        <input type="text" className="input-field" placeholder="eg. CE - #### - ####"  required/>
                    </div>

                    <div className="input-group">
                        <label>Location Longitude</label>
                        <input type="text" className="input-field" placeholder="" />
                    </div>

                    <div className="input-group">
                        <label>Location Latitude</label>
                        <input type="text" className="input-field" placeholder="" />
                    </div>

                    <div className="input-group">
                        <label>Minimum Price (GHS)  *</label>
                        <input type="number" className="input-field" placeholder="100" required/>
                    </div>

                    <div className="input-group">
                        <label>Maximum Price (GHS)  *</label>
                        <input type="number" className="input-field" placeholder="100" required />
                    </div>

                    <div className="input-group">
                        <label>Price Period  *</label>
                        <select name="period" id="period" required>
                            <option value="" selected></option>
                            <option value="Per Semester">Per Semester</option>
                            <option value="Per Academic Year">Per Academic Year</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Gender Policy  *</label>
                        <select name="gender" id="gender" required>
                            <option value="" selected></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Mixed">Mixed </option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Distance to Campus (km)  *</label>
                        <input type="text" className="input-field" placeholder="eg 0.5" required/>
                    </div>

                    <div className="input-group">
                        <label>Minutes walk to Campus</label>
                        <input type="text" className="input-field" placeholder="eg 10" />
                    </div>

                    <div className="input-group full-width">
                        <label>Description  *</label>
                        <textarea className="input-field" placeholder="Describe the atmosphere, rules, and nearby facilities..." required></textarea>
                    </div>

                    <div className="input-group">
                        <label>Phone Number  *</label>
                        <input type="number" className="input-field" placeholder="0XXXXXXXXX" required/>
                    </div>

                    <div className="input-group">
                        <label>WhatsApp Number  *</label>
                        <input type="text" className="input-field" placeholder="+233XXXXXXXXX"  required/>
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" className="input-field" placeholder="name@example.com" />
                    </div>

                    <div className="input-group">
                        <label>Website</label>
                        <input type="URL" className="input-field" placeholder="https://www.example.com" />
                    </div>

                    <div className="input-group">
                        <label>Facebook</label>
                        <input type="URL" className="input-field" placeholder="https://www.facebook.com/..." />
                    </div>

                    <div className="input-group">
                        <label>Instagram</label>
                        <input type="URL" className="input-field" placeholder="https://www.instagram.com/..." />
                    </div>


                    <div>* These fields are required</div>
                    <div className="submit-section full-width">
                        <button type="submit" className="btn-primary">Submit Registration</button>
                    </div>
                </form>
            </div>
    )
}