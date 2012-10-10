using System.Web.Mvc;

namespace jsApp.Controllers
{
    public class TemplatesController : Controller
    {
        public ActionResult GetTemplate(string id)
        {
            return PartialView((object)id);
        }

        public ActionResult GetTemplateText(string id)
        {
            return PartialView(id);
        }

    }
}
