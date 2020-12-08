import React from 'react';

export const SearchPage = () => {
    return (
        <section classNameName="container mt-5 mb-5">

            <div className="jumbotron">
                <h1 className="display-4">Search</h1>

                <form>
                    <div class="form-group">
                        <input  
                            type="text"
                            class="form-control"
                            placeholder="Ej: Superman."
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                    >Search now</button>
                </form>
                
            </div>    

        </section>
    )
}
