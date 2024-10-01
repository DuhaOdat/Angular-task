using AngularApp_day2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp_day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubsecribtionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubsecribtionController( MyDbContext db)
        {
            _db = db; 
        }


        [HttpGet("GetSubsecribtion")]
        public IActionResult GetSubsecribtion()
        {
            var Subsecribtion=_db.Subscriptions.ToList();
            return Ok(Subsecribtion);
        }
    }
}
