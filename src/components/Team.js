import React from 'react'

const Team = () => {

    return (
        <main className="team">
            <div className="team__header">
                <h1><span> Masterminds </span>behind the Product</h1>
                <p>Built by the best, for the best!</p>
            </div>
            <div className="team__member">
                <div className="team__member--member1 teamgrid curve-right" title="Sushant">
                    <div className="content">
                        <h2>Sushant Singh</h2>
                        <p>Co-Founder & CEO</p>
                    </div>
                </div>
                <div className="team__member--member2 teamgrid curve-right" title="Shasta">
                    <div className="content">
                        <h2>Shasta Nelson</h2>
                        <p>Co-Founder & CXO</p>
                    </div>
                </div>
                <div className="team__member--member3 teamgrid curve-left" title="Aditya">
                    <div className="content">
                        <h2>Aditya Anand</h2>
                        <p>Co-Founder & COO</p>
                    </div>
                </div>
                <div className="team__member--member4 teamgrid curve-left" title="Pulkit">
                    <div className="content">
                        <h2>Pulkit Sharma</h2>
                        <p>Chief Technology Officer</p>
                    </div>
                </div>
                <div className="team__member--member5 teamgrid curve-left" title="Siddhant">
                    <div className="content">
                        <h2>Siddhant Siddharth</h2>
                        <p>Design Head</p>
                    </div>
                </div>
                <div className="team__member--member6 teamgrid curve-left" title="Prateek">
                    <div className="content">
                        <h2>Prateek Arora</h2>
                        <p>Senior Developer</p>
                    </div>
                </div>
                <div className="team__member--member7 teamgrid curve-right" title="Jatin">
                    <div className="content">
                        <h2>Jatin Dogra</h2>
                        <p>Chief Business Officer</p>
                    </div>
                </div>
                <div className="team__member--member8 teamgrid curve-right" title="Saurav">
                    <div className="content">
                        <h2>Saurav Shetty</h2>
                        <p>Junior Developer</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Team
