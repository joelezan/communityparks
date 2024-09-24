import React from "react";
import Park from "./Park.jsx";

const Grid = () => {
  return (
    <div className="Grid">
      <table>
        <tbody>
          <tr className="parkrows">
            <Park
              name="Reginald Moore Community Park"
              image="https://lh3.googleusercontent.com/p/AF1QipOX8dpvaNJcVldRwTjfTY3wJiFlSMtHtTH6jEkW=s1360-w1360-h1020"  
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/reginald-moore-community-park"
            />
            <Park
              name="Archbishop Joseph Fiorenza Park North"
              image="https://lh3.googleusercontent.com/p/AF1QipM1jdlEOsxmhgx31ZT2t6UTZIJ6Ud9lQE__hOdX=s1360-w1360-h1020"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/archbishop-joseph-florenza-north"
            />
            <Park
              name="Eldridge Park"
              image="https://www.sugarlandtx.gov/ImageRepository/Document?documentID=17860"
              link="https://www.sugarlandtx.gov/Facilities/Facility/Details/Eldridge-Park-9"
            />
              <Park
              name="Arthur Storey Park"
              image="https://lh3.googleusercontent.com/p/AF1QipPIJqSbKBnRzY_AUtrQUX70AMpr9GCz6ghbABqj=s1360-w1360-h1020"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/arthur-storey"
            />

          </tr>
          <tr className="parkrows">
            <Park
              name="Cullinan Park"
              image="https://lh3.googleusercontent.com/p/AF1QipMXgn0iq7s38fsDgha_h7guadEQDT5d9BKWjTJF=s1360-w1360-h1020"
              link="https://cullinanparkconservancy.org/"
            />
            <Park
              name="Alief Community Park"
              image="https://lh3.googleusercontent.com/p/AF1QipNR_f8hAxjHQJn-IfwsHO5XP-seMOVpwp8LnOEo=s1360-w1360-h1020"
              link="https://www.houstontx.gov/parks/aliefneighborhoodcenter.html"
            />
            <Park
              name="McClendon Park"
              image="https://lh3.googleusercontent.com/p/AF1QipNr__XpJXIX63TA7N_-rioj88TrjIYP8dfUntvS=s1360-w1360-h1020"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/mcclendon-park"
            />
              <Park
              name="Alief-Amity Park"
              image="https://lh3.googleusercontent.com/p/AF1QipPUo9EkcFluMo6B7BJf41F63bb9ofnRrVYeSjW7=s1360-w1360-h1020"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/alief-amity-park"
            />
          </tr>
          <tr className="parkrows">
            <Park
              name="Archbishop Joseph Fiorenza Park East"
              image="https://cp4.harriscountytx.gov/Portals/cp4/Images/Fiorenza_Park_East_5.jpg?ver=JFAKlX7z6uml9UjXqKcvig%3d%3d"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/archbishop-joseph-florenza-east"
            />
            <Park
              name="Bear Creek Pioneers Park"
              image="https://cp4.harriscountytx.gov/Portals/cp4/Images/Bear_Creek_1.jpg?ver=MdeIXnYmHZ8axAGTDPbmuw%3d%3d"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/bear-creek-pioneers-park"
            />
            <Park
              name="Paul D. Rushing Park"
              image="https://cp4.harriscountytx.gov/Portals/cp4/Images/rushing-1.jpg?ver=O3moNWkTK2HfsFHCjsOZGw%3d%3d"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/paul-d-rushing-park"
            />
              <Park
              name="Ray Miller Park"
              image="https://s3-media0.fl.yelpcdn.com/bphoto/JCeT-D33inshbna5cU6w6g/348s.jpg"
              link="https://cp4.harriscountytx.gov/Explore/Parks/park/ray-miller-park"
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
