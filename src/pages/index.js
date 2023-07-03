import * as React from 'react'
import Layout from '../components/layout-home'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="home">
      <div className="text-grey-500 font-poppins">
        <p>Computer artist.</p>
        <p>Since 2016, I have been creating digital stuff by tinkering with code both online and offline. Actually I'm studing net.art at Accademia di Belle Arti di Carrara and I'm based in La Spezia (it).</p>
      </div>

      {/* <StaticImage className="my-8 animate-fadeout" src="../images/sb_omen_v20034.jpg" /> */}

      <iframe className="my-8 animate-fadeout w-full h-[60vh]" src="https://hydra.ojack.xyz/?code=b3NjKDElMkMlMjAwLjUlMkMlMjAwLjAwMSklMEElMjAlMjAlMjAlMjAua2FsZWlkKCU1QjMlMkM0JTJDNSUyQzclMkM4JTJDOSUyQzEwJTVELmZhc3QoMC4wMSkpJTBBJTIwJTIwJTIwJTIwLmNvbG9yKDAuNyUyQyUyMDAuMyklMEElMjAlMjAlMjAlMjAuY29sb3JhbWEoLjEpJTBBJTIwJTIwLmRpZmYoZ3JhZGllbnQoLjMpKSUwQSUyMCUyMC5hZGQoc2hhcGUoMiUyQzIpLmJsZW5kKGdyYWRpZW50KDEpKSklMEElMjAlMjAubW9kdWxhdGUobm9pc2UoKSklMEElMjAlMjAlMjAlMjAucm90YXRlKDIlMkMoKSUzRCUzRU1hdGguc2luKHRpbWUpKiUyMC0wLjAwMDElMjApJTBBJTIwJTIwJTIwJTIwLm1vZHVsYXRlUm90YXRlKG8wJTJDKCklM0QlM0VNYXRoLnNpbih0aW1lKSUyMColMjAwLjAwMDEpJTBBJTIwJTIwJTIwJTIwLm1vZHVsYXRlKG8wJTJDJTIwMC45KSUwQSUyMCUyMCUyMCUyMC5zY2FsZSguNSklMEElMjAlMjAlMjAlMjAub3V0KG8wKSUwQSUwQSUwQQ%3D%3D"></iframe>
      <h3 className="font-poppins text-2xl text-gray-500">Latest experiences</h3>


      { data.allMdx.nodes.map(node => (
          <div className=''>
          
          <article key={node.id} className='py-6'>

          <h3>
            <Link className="hover:underline" to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h3>

          <p className='font-lato text-gray-400 text-sm'>{node.frontmatter.date}</p>

        </article>
        

        </div>
        )) }
        
      <div className="border-t-2 stroke-gray-300 my-6">
        <div className="flex flex-col text-gray-300 text-lg my-6 space-y-3">

         <div className="flex flex-row space-x-6">
            <Link to={`/bio`}>
              <div>bio</div>
            </Link>

            <div>
              <Link className="hover:underline" to={`/cv`}>CV</Link>
            </div>

            <Link to={`/live`}>
              <div>live report</div>
            </Link>
         </div>

          <div className="flex flex-row space-x-6">
            <div><a href="mailto:lorenzoantei@pr.me">email</a></div>
          
            <div><a href="t.me/lorenzoantei">telegram</a></div>
          </div>
        
        </div>
      </div>
    </Layout>
    
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
