import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const SobreNosotros = () => {

  const containerStyle = {
    width: '60vw',
    height: '80vh',
    display:'block'
  };
  
  const center = {
    lat: 18.9945799,
    lng: -98.198369
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <LoadScript
          
          googleMapsApiKey="AIzaSyChVyb2nPgMzs1jsi7c-2y_j7pMZw6YU-E"
        >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: true,
              }}
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <Marker position={center} />
            </GoogleMap>
        </LoadScript>
        <div className='ml-5'>
          <h2 className="colorprincipal  my-4">Sobre Nosotros</h2>
          <p className='width550'>
            Duis mattis tempus risus, vitae fermentum odio facilisis eget. Vestibulum commodo vehicula finibus.
            Donec id condimentum tellus, vel rutrum ante. Ut ligula diam, egestas id nunc eget, consectetur venenatis ipsum.
            Sed mi lorem, porttitor in lacus id, condimentum ornare nibh. Sed consequat posuere metus eget vulputate. Pellentesque 
            ultrices risus ligula, id sagittis ex luctus et. Integer iaculis nulla tellus, nec molestie ipsum volutpat quis. Nunc 
            consectetur, mi eleifend finibus commodo, nibh nisl ultrices metus, in feugiat mauris massa ac mauris. Etiam fringilla 
            quis quam nec consequat. Vestibulum ut lectus mauris. Sed condimentum mauris a nunc efficitur blandit. Vivamus vel urna 
            condimentum, gravida quam at, eleifend purus.
          </p>
        </div>
      </div>
      
      
    </div>
  )
}

export default SobreNosotros