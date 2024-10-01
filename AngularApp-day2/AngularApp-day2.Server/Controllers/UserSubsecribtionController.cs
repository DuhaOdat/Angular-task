using AngularApp_day2.Server.DTO;
using AngularApp_day2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp_day2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubsecribtionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserSubsecribtionController( MyDbContext db)
        {
            _db= db;
        }

        [HttpPost]
        public IActionResult addUserSubsecribtion([FromBody] UserSubsecribtion subsecriptionDTO )
        {
            var subscription=_db.Subscriptions.Where(x=>x.SubscriptionId== subsecriptionDTO.SubscriptionId).FirstOrDefault();
            var amount = subscription.SubscriptionAmount;

            DateOnly startDate = DateOnly.FromDateTime(DateTime.Now);

            DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);

            switch (amount)
            {
                case "7":
                    endDate = startDate.AddDays(7);break ;
                case "90":
                    endDate = startDate.AddMonths(3); break;
                case "365":
                    endDate = startDate.AddYears(1); break;
            }

            var userSubscrip = new UserSubscription
            {
                UserId = subsecriptionDTO.UserId,
                SubscriptionId = subsecriptionDTO.SubscriptionId,
                SubServiceId = subsecriptionDTO.SubServiceId,
                StartDate = startDate,
                EndDate = endDate,
            };
            _db.UserSubscriptions.Add(userSubscrip);
            _db.SaveChanges();
            return Ok();
        }
    }
}
