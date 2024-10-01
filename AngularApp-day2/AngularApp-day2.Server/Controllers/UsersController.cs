using AngularApp_day2.Server.DTO;
using AngularApp_day2.Server.Models;
using Azure.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp_day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UsersController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult addUser([FromForm] addUserDTO userDTO)
        {

            var checkuser= _db.Users.Where(x=>x.Email ==  userDTO.Email).FirstOrDefault();
            if (checkuser != null)
            {
                return BadRequest("User already exists");
            }
            var user = new User
            {

                Username = userDTO.Username,
                Email = userDTO.Email,
                Password = userDTO.Password,

            };
            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok(user);
        }

        [HttpPost("login")]
        public IActionResult Login([FromForm] loginDTO logindto)
        {
            var user=_db.Users.Where(u=>u.Email== logindto.Email&& u.Password==logindto.Password);
            if (user == null)
            {
                return BadRequest("user doesnt exists");
            }
            return Ok();
        }

    }
}
