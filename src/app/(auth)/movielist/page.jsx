
"use client";


const Movielist = () => {
    
    
return (
    <div>


        {/* When no movie present */}
        <div className="no-movies">
            <div>
                <h1>Your movie list is empty</h1>
                <button className="btn btnPrimary">Add a new movie</button>
            </div>
        </div>
        {/* When no movie present */}




        {/* Movies list Page starts here */}
        <div className="container">
            <div className="page-heading">
                <h1>My movies 
                    <a href=""><img src="/add-white.svg" width={20} alt="" /></a>
                </h1>
                <div>
                    <div className="logoutBtn">
                        <a className="text-white text-dec-none" href="">
                        <div>
                            <span>Logout</span>
                            <img className="ml-10" src="/logout-white.svg" alt="" />
                        </div>
                        </a>
                    </div>
                </div>
            </div>


            {/* movies card Loop should start from columns */}
            <div className="row">
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cards">
                        <img src="/movie-poster.png" alt="" />
                        <div className="cards_titles">
                            <div className="cards_titles_heading">Movie 1</div>
                            <div className="cards_titles_subheading">2021</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* movies card */}

            

            {/* Pagination code should run here */}
            <br />
            <br />
            <div className="text-white text-center">
                1 2 3
            </div>
            <br />
            <br />
            {/* Pagination code should run here */}
        </div>
    </div>
  );
};

export default Movielist;
