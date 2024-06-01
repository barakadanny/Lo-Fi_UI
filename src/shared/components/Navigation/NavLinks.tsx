import React from "react";
import { NavLink } from "react-router-dom";
// import settings from "./../../../assets/icons/settings.gif";

const NavLinks: React.FC = () => {
  return (
    <>
      <ul className="space-y-5 font-medium">
        <li>
          <NavLink
            end
            to="/"
            className="hover:bg-[#645a5a] cursor-pointer p-2 flex justify-center rounded-lg "
          >
            <img
              className="w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB90lEQVR4nO2Yv0scQRTHP16iBIIBFQXBBAsRQZGzsbS7gEIKwSKF4BXiX6CY0tLW0srSSuz8hWBhIbH0ByGEWIh2/kiCoqtnVhZHGB57Mvv7DucDA8fuvO97b/e9mZ0Di8WSFAPAIfBb/a4qJoA7wFXjHpimCngHLGiBy7EIvKdC6QD2RMA7aujX9tTcimIIuBCBzgN1wFtgVtz7CwxTAdSo2n7QgrsFxn3mjgLX2rz/KrEcGfEBWBZP9hjof8EmDxwJmxWggZTpAn6IQLaAFgPbJmBd2P4CekmJr8CVKIU5VeumvAFmROndAMUE4/Ztxn/ASATNL8ClT/PXEjPNwKZw9BPojkG7EzgQ2ttAKzHRB5wIB0tAfVwOeNJaEj5OlO9I5MX6XgK+qeUzbmqUdknzdx6lub063NfEzoACyVNQvvSdO1RPFDWRPzHVuyk9ard+9j8WRkRfqydJnynN/2oYgVNN4BPp0y4aOjD6JpPF90pO8+/FEhh9ScsKN0oMNoEYcO0b4JX1wBCwCzg+B3pH3RtMOIbQxp/V2cA1GF6iJqSawK5h8N74XokJONp8vzNuozj4JxFDJGOT+UlolsUm4IN9A0GwJeSDLaEg2BLKuoScAJ8GruEum4RmWTZCOltLWbMsH9VfK6ZPzVGO2lLWtFgsVDGPMK2osGh7JHQAAAAASUVORK5CYII="
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#"
            className="hover:bg-[#645a5a] p-2 flex justify-center rounded-lg"
          >
            <img
              className="w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nO2ZTWsUQRCGH/bqV1CyiYqiIMYPvAj+CBFyiqKo6OjFaAIRRC/qj9BLRH+ARNQYop7Ff5DEqLfgSRTEJApqViMF70AxzLizQXp7YB4Ydie1293vVnVVpQdqajw7gBHgJfAW+AZ8Bz4Az4HrwAARsx24D7SA1TbXHNBDhAwCS1rkT+AhcFK//DpgP/BZ9hmglwgZBX5rkRPA7oy9CczKPhuriEGJsHC6mmM3EXMunOw+yj2RhlOeiD4n4o3uo+SBC6csfVp8pyJ6upFiW9rY2T3RD8xLhL2WFdErDwZNzSNaqGUnzwbVjlSEiSorYkbfszoTjBea9FTm7w1gQbahkmM1XVaza5qAvNeke3NsN2WbLDFO0yWET3q1HyIYy5p0fY5tK/ALWFFmK+MJC8dDem/tTDDStLuxwD4p+62SIvo1lt0vEpB3mvRAgf2o7F+A2xnP+KzmU/OAExaMJ5r0TIG9kdnAK/LSUIEI43Q3NvtFTfrsH59pyDNPJcR3v3n1ZUK2YQI3ijbpD2BTic9vUzZbcHvCs0fFtV2C+K9ccN3uWIffbahoFoXqOBUQUcQ1jfe1g04gShEtjXuMyEQU1ZbsnkjDyca9QmQixpQApoCzwEEJsw5gn1LsI1X+NJyCeCJxIm6UENHu0GHV1ZV7amei80QaJqOqM49VL5bUm82r2A2HTLFr8cQf4BIRkdQiIiGpPREJSe2JSEhqT0RCUnsiEpLaE5Fwfo1drHW/0XDE/RNTWRHoTMkWd4cKi8A9Sd1JhUX4w+YtVFiE8VoLvUyFRRgn3DMHO3LZDOwC7lZJREq66OxlZ63nqBjHgVd6iPJRJ9+Hu72oGirGX6IGN+1TQXGAAAAAAElFTkSuQmCC"
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#"
            className="hover:bg-[#645a5a] p-2 flex justify-center rounded-lg"
          >
            <img
              className="w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5klEQVR4nO1aPUwUQRT+YnIYkjvQiBZS0lOoDR1nJRJipMASLUGlsOBMoMFEYkcoobORmhIDCo1oIJ6ExKClZ2IrPzHRwjGTfJu8rPszO3N7twv7JRPYt+/NzXvzfmZmByhQII94DUD52hrOCC4HKO+1HpwyVAHMAqgI2gCV3RG0HdL0Ow8Vyuo+com7AP5QsQMA/QDKABZIWxG8r0hbIE8/ZRT70H3lVvkf/PsLwKFw92nBPy3oh+SVsrkyQlUoPw+gE8CyUHAdwDiAkpApkbYu+JYoOy+MkItwmBWzpxXwoAd/3UBe8wyK507hCbrvzKMM4LOYRVd43vMVQJeJwB0AmwBOIspNWs1Dv4hjOZsa5wFMAXjPMZ7w/0cAOny8VZE/dJ+xeNEGpYMMUBYJT7p9L4BPEfJ18ni4IRJj2WTmFYDfzKpX0Xr0sJZ7pU4nNTnznvLfAIyy1leY4b2y99HnCRuiRA5ELZY2yVizHPw5UzcLwVrAjOrM7mFKKH8pQP4igC/keSjo902Xzcd8GTfzVwBMBNBvUn5V0CbIbwJvcDtc5Ez7St0Hvr8X0ccoed4JWol9rYgVo4oaQBS0Mvvkm/S9e0n6HJ8n+bxvaIS43/cmqDuCp0vEfOLfUTEDkMr7laowG/8F0GfA72KACxE83eQ5svkdFTOA3QhlHvDdlo8ujSA3Ly4hMBbRxxh5tgWtxLzmHAK7EQbY4jttCFsDxCXBx6R9D0mCmtYgj14TeBg3TYLKMgT66Ponvm1r0hAwKYN10huc7S62MaF83bYMKsskOMdnnQQlkiZBGC6E6mkthJSBAYLK4CrldBn0I0kZhOFSuIMuvs3EeMyyF7QUHkyyFFaGBggbsF4INQMVsarTG5lmbYYOfCH6H1wM0Irt8GCC7XDVZjusMmKAoAORJTG+DS5v/QcimvZG8C0nPRBRGTGAzZFYrRlHYirGAP6MG0YPa2keiq4041BUZcwAoMvOOByLzyQ5B1QZCoG2fBhROTFA2LJ5zVUPZSjYrFBIy+CFAZCyB2QdhQFQ5AAUSRCtjJ2MocgBKKoAihCAQ+yoU9IKAySFKqoAijKokB+Eeay1Jx9TsB0XI2wQpGgvaT9tOnzreEEiC3ga8EnNGCPiikwtR54AjrXGsWsdbtt29DwD9du1PXO15jA/PhxlQBnTdkS3t575ZuEaB7RnIbtHWd1HbjEacFHKFN5XZt1HbvGESixayC5SVveRWyw6KOFivMxg1cGNXcInM9hzSGQuCbRtGOatrbTKm774NIQMo9GCGq/vBmcWii2v/TvjzBugcdZDYCjlPKCVv9VuJQvgFOMfeL2UA50Va1sAAAAASUVORK5CYII="
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#"
            className="hover:bg-[#645a5a] p-2 flex justify-center rounded-lg"
          >
            <img
              className="w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nO2aP07DMBTGvwopE8eAS1CYKQxwB6pegoEF0YQbsHADkFiZacTC2COQVoj/UkVBBRlFeoAVOYndJI1j3ic9qbWdNP75fbbrFmCxWCwWi8X6kwfgGMAIgHAkIgAB9S1XgQUPXFX4OgAiarwGd7QuZUKuBIVr0u6XYADgDBCwU1sA3jMmuSvXLdABMM2Z6Z0GkNQSgDMXAHjS5stk03JCz/rYdADBHJuWA2r3BqDddACRtPnS2bT0qM0ngF0qazSAe/rMuPMb9Hqc0naHOi4IBGwD4M3h5wuFBT4AdBPt2pTygiwga0pRO4DA0M/bAL4o7igbLqVr49cPBPSVyuLJT7VEbtoAIDLw8yqAZ2qzn6jboyxIwryh5c9UCwMw0vTzMoAh1cdreUvRZqyAGWcIbAXQATDR8HPc2XOqGxKMrGySYd7aCqAHYEbXhjRSaX5+ofdPAFYy7ukrYPbneLZKAbQAHEnXHSrSuZvi59Oce3sEIaKR7+sea1UJwJOWuXgLek3tZ4plqyo/1wogUIzkJGcJKtvPtQKIFCMZZ0OeyvJzqLjPTwwK9MsYgOlIluXntM4vbCvslzgzz6O051sYAK/EmbmRAMqWqaedAyAMPe0sgKrA6Nb/igGgWAZkebrKVLcmA8R/ARDW1CFrAAgGAKtGurYMsL1ct77wJNaUyJVwPLQBuCYGgAIZECq+mTWtrBAA4UAZA0CBDBgo/oDUtDKeBKGZAZF06uuKjH6H8C3YrFQVWqfXnnTqKxyJOk6vWSwWi8ViwW59A7Ezp87CdZmfAAAAAElFTkSuQmCC"
            />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
