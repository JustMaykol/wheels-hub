import React from 'react';

const Map = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full h-64 md:h-96 lg:w-3/4 lg:h-72 mx-auto rounded-lg overflow-hidden shadow-lg">
                <iframe title="Google Maps" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15605.095819436677!2d-77.0505357191229!3d-12.046374871580071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c88ee27c9921%3A0x4a52b9a6e8f2e5a1!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1623859823420!5m2!1sen!2sus" allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Map;