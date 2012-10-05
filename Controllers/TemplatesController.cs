using System.Web.Mvc;

namespace jsApp.Controllers
{
    public class TemplatesController : Controller
    {
        public ActionResult GetTemplate(string templateId)
        {
            return PartialView((object) templateId);
        }

    }
}
