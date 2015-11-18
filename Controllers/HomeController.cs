using Microsoft.AspNet.Mvc;

namespace OpenBook.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
