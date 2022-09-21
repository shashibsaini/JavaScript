
class UtensilVolume
{
    constructor(name,radius,height=1)
    {
        this.name = name;
        this.height = height;
        this.radius = radius;
    }

    getVolume()
    {
        if(this.name == 'Cylinder')
        {
            console.log('Cylinder');
            return (3.14 * this.radius * this.radius * this.height)
        }
        else if(this.name == 'Sphere')
        {
            console.log('Sphere');
            return (4/3 * 3.14 * this.radius*this.radius*this.radius)
        }
        else if(this.name == 'Cone')
        {
            let a = (3.14 * (this.radius * this.radius) * (this.height/3))
            console.log('Cone');
            return a
        }
    }

}

function cvolume()
{
    let type = document.getElementById("size").value;
    let radius = document.getElementById("radius").value;
    let height = document.getElementById("height").value;
    
    let obj = new UtensilVolume(type,radius,height);
    let result = Number(obj.getVolume()).toFixed(2);
    document.getElementById("msg").innerHTML = `Volume of ${type} is ${result}`
}
